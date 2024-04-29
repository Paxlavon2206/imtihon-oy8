import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
export const Catalog = () => {
  return (
    <div>
         <Sheet>
            <SheetTrigger className="text_bg rounded-[6px] bg-primary  text-white flex items-center py-2 px-3">
              <p>Katalog</p>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
    </div>
  )
}
