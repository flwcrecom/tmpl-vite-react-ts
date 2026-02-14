import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Hello World</CardTitle>
          <CardDescription>React + TypeScript + shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
