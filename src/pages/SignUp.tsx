import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ui from '../uipath.ts';

export function SignUp() {
    return (
        <Card className="mx-auto max-w-sm bg-background">
            <CardHeader>

                <CardTitle className="font-bilabong  text-6xl font-bold text-prussian_blue ">Tunecape</CardTitle>
                <CardDescription>
                    Sign up to see music from your friends.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Robinson" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button
                        aria-label="Sign in with Google"
                        className="flex items-center bg-white border border-button-border-light rounded-md p-0.5 pr-3 text-black">
                        <img
                            src={ui.googleLogo}
                            alt="Google Logo"
                            width="20"
                            height="20"
                            className="mr-2"
                        />
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="#" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUp;
