
import './login.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from 'react'
const Login = () => {
  const [loginInput, setLoginInput] = useState({ 
    email: "", 
    password: "" 
  });
  const [signupInput, setSignUpInput] = useState({ 
    email: "", 
    name: "", 
    password: "" 
  });
  const changeInputHandler=(e,type)=>{
    const {name,value}= e.target;
    if(type==="signup"){
      setSignUpInput({...signupInput,[name]:value});
    }if(type==="login"){
      setLoginInput({...loginInput,[name]:value});
    }
  }

  const HandleRegistration=(type)=>{
    const inputData = type == "signup"? signupInput:loginInput;
    console.log(inputData);
  }
  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign-Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="centre-align">Sign-Up</CardTitle>
              <CardDescription className="text-align">
                Enter credetials and that's it!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input onChange= {(e)=>changeInputHandler(e,"signup")} value={signupInput.name} name="name" type="text" placeholder="Enter your name here" required={true} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input onChange= {(e)=>changeInputHandler(e,"signup")} value={signupInput.email} name="email" type="email" placeholder="Enter your email" required={true} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Password</Label>
                <Input onChange= {(e)=>changeInputHandler(e,"signup")} value={signupInput.password} name="password" type="password" placeholder="choose a strong password" required={true} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="centre-align" onClick={()=>HandleRegistration("signup")}>Sign-Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="centre-align">Login</CardTitle>
              <CardDescription className="text-align">
                Already have an account? login!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input onChange= {(e)=>changeInputHandler(e,"login")} name="email" value={loginInput.email} type="email" placeholder="Enter your email" required={true}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input onChange= {(e)=>changeInputHandler(e,"login")} name="password" value={loginInput.password} type="password" placeholder="choose a strong password" required={true} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="centre-align" onClick={()=>HandleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default Login
