import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plug } from "lucide-react";

const AccountsPage = () => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center">
        <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
        <Button>
          <Plug className="size-4 mr-2" />
          Add new
        </Button>
      </CardHeader>
    </Card>
  );
};

export default AccountsPage;
