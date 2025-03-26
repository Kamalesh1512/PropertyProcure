import SettingsPage from '@/components/global/settings'
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminSettingsPage = () => {
  const isAdmin = checkRole('admin')

  if (!isAdmin) {
    redirect('/')
  }
  return (
    <div>
      <SettingsPage isAdmin={isAdmin}/>
    </div>
  )
}

export default AdminSettingsPage