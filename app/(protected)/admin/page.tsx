"use client"
import { currentRole } from "@/lib/authentication"
import { Card, CardHeader,CardContent } from "@/components/ui/card"
import { useCurrentRole } from '@/hooks/use-current-role'
import { UserRole } from "@prisma/client"
import { RoleGate } from "@/components/auth/role-gate"
import { FormSuccess } from "@/components/form-success"
import { Button } from "@/components/ui/button"
import {admin} from "@/actions/admin";
import { toast } from "sonner"

const AdminPage = () => {
  
  const onServerAction = () => {
    admin()
      .then((data) => {
        if(data.error){
            toast.error(data.error)
        }
      })
  }

  const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
                if(response.ok){
                    toast.success("Access Granted")
                } else {
                    toast.error("Access Denied");
                }
            })
  }   
  return (
    <Card className="w-[600px]">
        <CardHeader>
          <p className="text-2xl font-medium text-center">
             Admin
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
            <RoleGate allowedRole={UserRole.ADMIN}>
                 <FormSuccess message="You are allow to see this content!"/> 
            </RoleGate>

            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                <p className="text-sm font-medium">
                    Admin-only API Route
                </p>
                <Button onClick={onApiRouteClick}>
                    Click to test
                </Button>
            </div>

            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                <p className="text-sm font-medium">
                    Admin-only Server Action
                </p>
                <Button onClick={onServerAction}>
                    Click to test
                </Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default AdminPage
