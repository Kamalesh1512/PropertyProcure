"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Monitor, Check, Shield, SettingsIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { UserButton } from "@clerk/nextjs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface SettingProps {
  isAdmin: Promise<boolean> | boolean
}

export default function SettingsPage({ isAdmin }: SettingProps) {
  const { theme, setTheme } = useTheme()
  const [isAdminResolved, setIsAdminResolved] = useState<boolean | null>(null)

  // Handle Promise<boolean> or boolean for isAdmin
  useEffect(() => {
    const resolveIsAdmin = async () => {
      if (isAdmin instanceof Promise) {
        const result = await isAdmin
        setIsAdminResolved(result)
      } else {
        setIsAdminResolved(isAdmin)
      }
    }

    resolveIsAdmin()
  }, [isAdmin])

  const themeOptions = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="container max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Settings</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Customize your experience with our application</p>
      </motion.div>

      {isAdminResolved && (
        <motion.div
          variants={fadeIn}
          className="mb-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Admin Profile
              </CardTitle>
              <CardDescription>Manage your admin account and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6">
                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="p-1 border rounded-full">
                        <UserButton afterSignOutUrl="/" />
                      </div>
                      <div>
                        <h3 className="font-medium">Admin Account</h3>
                        <p className="text-sm text-muted-foreground">Manage your admin profile</p>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-auto">
                      <Button variant="outline" size="sm">
                        <SettingsIcon className="h-4 w-4 mr-2" />
                        Account Settings
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Admin Privileges</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Manage property listings</li>
                        <li>• Access to analytics dashboard</li>
                        <li>• User management</li>
                        <li>• System configuration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Last Sign In</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure which notifications you receive via email
                    </p>
                    <div className="space-y-2">
                      {/* Add notification preferences here */}
                      <p className="text-sm text-muted-foreground">Admin notification preferences would go here</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div variants={fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the application looks on your device</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Theme</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {themeOptions.map((option) => {
                  const Icon = option.icon
                  const isActive = theme === option.value

                  return (
                    <motion.div key={option.value} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant={isActive ? "default" : "outline"}
                        className={`w-full h-24 flex flex-col items-center justify-center gap-2 relative ${
                          isActive ? "border-2 border-primary" : ""
                        }`}
                        onClick={() => setTheme(option.value)}
                      >
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1"
                          >
                            <Check className="h-3 w-3" />
                          </motion.div>
                        )}
                        <Icon className="h-6 w-6" />
                        <span>{option.label}</span>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-8" />

      <motion.div variants={fadeIn}>
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Information about our application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Version</h3>
              <p className="text-muted-foreground">1.0.0</p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <p className="text-muted-foreground">Property Procure</p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Contact</h3>
              <p className="text-muted-foreground">propertyprocure@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}


