<template>
    <Dialog class="">
    <DialogTrigger as-child>
        <Button type="submit" class="w-full">
                Add Meter
        </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] h-[100vh]">
      <DialogHeader>
        <DialogTitle>Add Meter</DialogTitle>
        <DialogDescription>
          Add a meter to manage in your wallet here. 
        </DialogDescription>
      </DialogHeader>
      <div class="flex flex-col h-full">
        <Label for="name" class="py-2">
            Nickname
        </Label>
        <Input id="name" placeholder="Flat A1" class="w-full" />
        <Label for="meter" class="py-2">Meter</Label>
        <Input id="meter" placeholder="0100000000000123" class="w-full" />
      </div>
      <DialogFooter>
        <Button type="submit" class="w-full">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>