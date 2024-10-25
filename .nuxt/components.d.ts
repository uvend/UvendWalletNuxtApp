
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'UvendBalanceCard': typeof import("../components/uvend/balanceCard.vue")['default']
    'UvendDialogMeter': typeof import("../components/uvend/dialog/meter.vue")['default']
    'UvendDialogPurcahse': typeof import("../components/uvend/dialog/purcahse.vue")['default']
    'UvendMeters': typeof import("../components/uvend/meters.vue")['default']
    'UvendTransactions': typeof import("../components/uvend/transactions.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Card': typeof import("../components/ui/card/index")['Card']
    'CardContent': typeof import("../components/ui/card/index")['CardContent']
    'CardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'CardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'CardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'Dialog': typeof import("../components/ui/dialog/index")['Dialog']
    'DialogClose': typeof import("../components/ui/dialog/index")['DialogClose']
    'DialogContent': typeof import("../components/ui/dialog/index")['DialogContent']
    'DialogDescription': typeof import("../components/ui/dialog/index")['DialogDescription']
    'DialogFooter': typeof import("../components/ui/dialog/index")['DialogFooter']
    'DialogHeader': typeof import("../components/ui/dialog/index")['DialogHeader']
    'DialogScrollContent': typeof import("../components/ui/dialog/index")['DialogScrollContent']
    'DialogTitle': typeof import("../components/ui/dialog/index")['DialogTitle']
    'DialogTrigger': typeof import("../components/ui/dialog/index")['DialogTrigger']
    'Drawer': typeof import("../components/ui/drawer/index")['Drawer']
    'DrawerContent': typeof import("../components/ui/drawer/index")['DrawerContent']
    'DrawerDescription': typeof import("../components/ui/drawer/index")['DrawerDescription']
    'DrawerFooter': typeof import("../components/ui/drawer/index")['DrawerFooter']
    'DrawerHeader': typeof import("../components/ui/drawer/index")['DrawerHeader']
    'DrawerOverlay': typeof import("../components/ui/drawer/index")['DrawerOverlay']
    'DrawerTitle': typeof import("../components/ui/drawer/index")['DrawerTitle']
    'DrawerClose': typeof import("../components/ui/drawer/index")['DrawerClose']
    'DrawerPortal': typeof import("../components/ui/drawer/index")['DrawerPortal']
    'DrawerTrigger': typeof import("../components/ui/drawer/index")['DrawerTrigger']
    'DropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'Input': typeof import("../components/ui/input/index")['Input']
    'PinInput': typeof import("../components/ui/pin-input/index")['PinInput']
    'PinInputGroup': typeof import("../components/ui/pin-input/index")['PinInputGroup']
    'PinInputInput': typeof import("../components/ui/pin-input/index")['PinInputInput']
    'PinInputSeparator': typeof import("../components/ui/pin-input/index")['PinInputSeparator']
    'Toast': typeof import("../components/ui/toast/index")['Toast']
    'ToastAction': typeof import("../components/ui/toast/index")['ToastAction']
    'ToastClose': typeof import("../components/ui/toast/index")['ToastClose']
    'ToastDescription': typeof import("../components/ui/toast/index")['ToastDescription']
    'Toaster': typeof import("../components/ui/toast/index")['Toaster']
    'ToastProvider': typeof import("../components/ui/toast/index")['ToastProvider']
    'ToastTitle': typeof import("../components/ui/toast/index")['ToastTitle']
    'ToastViewport': typeof import("../components/ui/toast/index")['ToastViewport']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyUvendBalanceCard': typeof import("../components/uvend/balanceCard.vue")['default']
    'LazyUvendDialogMeter': typeof import("../components/uvend/dialog/meter.vue")['default']
    'LazyUvendDialogPurcahse': typeof import("../components/uvend/dialog/purcahse.vue")['default']
    'LazyUvendMeters': typeof import("../components/uvend/meters.vue")['default']
    'LazyUvendTransactions': typeof import("../components/uvend/transactions.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyButton': typeof import("../components/ui/button/index")['Button']
    'LazyCard': typeof import("../components/ui/card/index")['Card']
    'LazyCardContent': typeof import("../components/ui/card/index")['CardContent']
    'LazyCardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'LazyCardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'LazyCardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'LazyCardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'LazyDialog': typeof import("../components/ui/dialog/index")['Dialog']
    'LazyDialogClose': typeof import("../components/ui/dialog/index")['DialogClose']
    'LazyDialogContent': typeof import("../components/ui/dialog/index")['DialogContent']
    'LazyDialogDescription': typeof import("../components/ui/dialog/index")['DialogDescription']
    'LazyDialogFooter': typeof import("../components/ui/dialog/index")['DialogFooter']
    'LazyDialogHeader': typeof import("../components/ui/dialog/index")['DialogHeader']
    'LazyDialogScrollContent': typeof import("../components/ui/dialog/index")['DialogScrollContent']
    'LazyDialogTitle': typeof import("../components/ui/dialog/index")['DialogTitle']
    'LazyDialogTrigger': typeof import("../components/ui/dialog/index")['DialogTrigger']
    'LazyDrawer': typeof import("../components/ui/drawer/index")['Drawer']
    'LazyDrawerContent': typeof import("../components/ui/drawer/index")['DrawerContent']
    'LazyDrawerDescription': typeof import("../components/ui/drawer/index")['DrawerDescription']
    'LazyDrawerFooter': typeof import("../components/ui/drawer/index")['DrawerFooter']
    'LazyDrawerHeader': typeof import("../components/ui/drawer/index")['DrawerHeader']
    'LazyDrawerOverlay': typeof import("../components/ui/drawer/index")['DrawerOverlay']
    'LazyDrawerTitle': typeof import("../components/ui/drawer/index")['DrawerTitle']
    'LazyDrawerClose': typeof import("../components/ui/drawer/index")['DrawerClose']
    'LazyDrawerPortal': typeof import("../components/ui/drawer/index")['DrawerPortal']
    'LazyDrawerTrigger': typeof import("../components/ui/drawer/index")['DrawerTrigger']
    'LazyDropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'LazyDropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'LazyDropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'LazyDropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'LazyDropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'LazyDropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'LazyDropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'LazyDropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'LazyDropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'LazyDropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'LazyDropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'LazyDropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'LazyDropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'LazyDropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'LazyDropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'LazyInput': typeof import("../components/ui/input/index")['Input']
    'LazyPinInput': typeof import("../components/ui/pin-input/index")['PinInput']
    'LazyPinInputGroup': typeof import("../components/ui/pin-input/index")['PinInputGroup']
    'LazyPinInputInput': typeof import("../components/ui/pin-input/index")['PinInputInput']
    'LazyPinInputSeparator': typeof import("../components/ui/pin-input/index")['PinInputSeparator']
    'LazyToast': typeof import("../components/ui/toast/index")['Toast']
    'LazyToastAction': typeof import("../components/ui/toast/index")['ToastAction']
    'LazyToastClose': typeof import("../components/ui/toast/index")['ToastClose']
    'LazyToastDescription': typeof import("../components/ui/toast/index")['ToastDescription']
    'LazyToaster': typeof import("../components/ui/toast/index")['Toaster']
    'LazyToastProvider': typeof import("../components/ui/toast/index")['ToastProvider']
    'LazyToastTitle': typeof import("../components/ui/toast/index")['ToastTitle']
    'LazyToastViewport': typeof import("../components/ui/toast/index")['ToastViewport']
    'LazyIcon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const UvendBalanceCard: typeof import("../components/uvend/balanceCard.vue")['default']
export const UvendDialogMeter: typeof import("../components/uvend/dialog/meter.vue")['default']
export const UvendDialogPurcahse: typeof import("../components/uvend/dialog/purcahse.vue")['default']
export const UvendMeters: typeof import("../components/uvend/meters.vue")['default']
export const UvendTransactions: typeof import("../components/uvend/transactions.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Card: typeof import("../components/ui/card/index")['Card']
export const CardContent: typeof import("../components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const Dialog: typeof import("../components/ui/dialog/index")['Dialog']
export const DialogClose: typeof import("../components/ui/dialog/index")['DialogClose']
export const DialogContent: typeof import("../components/ui/dialog/index")['DialogContent']
export const DialogDescription: typeof import("../components/ui/dialog/index")['DialogDescription']
export const DialogFooter: typeof import("../components/ui/dialog/index")['DialogFooter']
export const DialogHeader: typeof import("../components/ui/dialog/index")['DialogHeader']
export const DialogScrollContent: typeof import("../components/ui/dialog/index")['DialogScrollContent']
export const DialogTitle: typeof import("../components/ui/dialog/index")['DialogTitle']
export const DialogTrigger: typeof import("../components/ui/dialog/index")['DialogTrigger']
export const Drawer: typeof import("../components/ui/drawer/index")['Drawer']
export const DrawerContent: typeof import("../components/ui/drawer/index")['DrawerContent']
export const DrawerDescription: typeof import("../components/ui/drawer/index")['DrawerDescription']
export const DrawerFooter: typeof import("../components/ui/drawer/index")['DrawerFooter']
export const DrawerHeader: typeof import("../components/ui/drawer/index")['DrawerHeader']
export const DrawerOverlay: typeof import("../components/ui/drawer/index")['DrawerOverlay']
export const DrawerTitle: typeof import("../components/ui/drawer/index")['DrawerTitle']
export const DrawerClose: typeof import("../components/ui/drawer/index")['DrawerClose']
export const DrawerPortal: typeof import("../components/ui/drawer/index")['DrawerPortal']
export const DrawerTrigger: typeof import("../components/ui/drawer/index")['DrawerTrigger']
export const DropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const Input: typeof import("../components/ui/input/index")['Input']
export const PinInput: typeof import("../components/ui/pin-input/index")['PinInput']
export const PinInputGroup: typeof import("../components/ui/pin-input/index")['PinInputGroup']
export const PinInputInput: typeof import("../components/ui/pin-input/index")['PinInputInput']
export const PinInputSeparator: typeof import("../components/ui/pin-input/index")['PinInputSeparator']
export const Toast: typeof import("../components/ui/toast/index")['Toast']
export const ToastAction: typeof import("../components/ui/toast/index")['ToastAction']
export const ToastClose: typeof import("../components/ui/toast/index")['ToastClose']
export const ToastDescription: typeof import("../components/ui/toast/index")['ToastDescription']
export const Toaster: typeof import("../components/ui/toast/index")['Toaster']
export const ToastProvider: typeof import("../components/ui/toast/index")['ToastProvider']
export const ToastTitle: typeof import("../components/ui/toast/index")['ToastTitle']
export const ToastViewport: typeof import("../components/ui/toast/index")['ToastViewport']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyUvendBalanceCard: typeof import("../components/uvend/balanceCard.vue")['default']
export const LazyUvendDialogMeter: typeof import("../components/uvend/dialog/meter.vue")['default']
export const LazyUvendDialogPurcahse: typeof import("../components/uvend/dialog/purcahse.vue")['default']
export const LazyUvendMeters: typeof import("../components/uvend/meters.vue")['default']
export const LazyUvendTransactions: typeof import("../components/uvend/transactions.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyButton: typeof import("../components/ui/button/index")['Button']
export const LazyCard: typeof import("../components/ui/card/index")['Card']
export const LazyCardContent: typeof import("../components/ui/card/index")['CardContent']
export const LazyCardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const LazyCardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const LazyCardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const LazyCardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const LazyDialog: typeof import("../components/ui/dialog/index")['Dialog']
export const LazyDialogClose: typeof import("../components/ui/dialog/index")['DialogClose']
export const LazyDialogContent: typeof import("../components/ui/dialog/index")['DialogContent']
export const LazyDialogDescription: typeof import("../components/ui/dialog/index")['DialogDescription']
export const LazyDialogFooter: typeof import("../components/ui/dialog/index")['DialogFooter']
export const LazyDialogHeader: typeof import("../components/ui/dialog/index")['DialogHeader']
export const LazyDialogScrollContent: typeof import("../components/ui/dialog/index")['DialogScrollContent']
export const LazyDialogTitle: typeof import("../components/ui/dialog/index")['DialogTitle']
export const LazyDialogTrigger: typeof import("../components/ui/dialog/index")['DialogTrigger']
export const LazyDrawer: typeof import("../components/ui/drawer/index")['Drawer']
export const LazyDrawerContent: typeof import("../components/ui/drawer/index")['DrawerContent']
export const LazyDrawerDescription: typeof import("../components/ui/drawer/index")['DrawerDescription']
export const LazyDrawerFooter: typeof import("../components/ui/drawer/index")['DrawerFooter']
export const LazyDrawerHeader: typeof import("../components/ui/drawer/index")['DrawerHeader']
export const LazyDrawerOverlay: typeof import("../components/ui/drawer/index")['DrawerOverlay']
export const LazyDrawerTitle: typeof import("../components/ui/drawer/index")['DrawerTitle']
export const LazyDrawerClose: typeof import("../components/ui/drawer/index")['DrawerClose']
export const LazyDrawerPortal: typeof import("../components/ui/drawer/index")['DrawerPortal']
export const LazyDrawerTrigger: typeof import("../components/ui/drawer/index")['DrawerTrigger']
export const LazyDropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const LazyDropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const LazyDropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const LazyDropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const LazyDropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const LazyDropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const LazyDropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const LazyDropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const LazyDropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const LazyDropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const LazyDropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const LazyDropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const LazyDropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const LazyDropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const LazyDropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const LazyInput: typeof import("../components/ui/input/index")['Input']
export const LazyPinInput: typeof import("../components/ui/pin-input/index")['PinInput']
export const LazyPinInputGroup: typeof import("../components/ui/pin-input/index")['PinInputGroup']
export const LazyPinInputInput: typeof import("../components/ui/pin-input/index")['PinInputInput']
export const LazyPinInputSeparator: typeof import("../components/ui/pin-input/index")['PinInputSeparator']
export const LazyToast: typeof import("../components/ui/toast/index")['Toast']
export const LazyToastAction: typeof import("../components/ui/toast/index")['ToastAction']
export const LazyToastClose: typeof import("../components/ui/toast/index")['ToastClose']
export const LazyToastDescription: typeof import("../components/ui/toast/index")['ToastDescription']
export const LazyToaster: typeof import("../components/ui/toast/index")['Toaster']
export const LazyToastProvider: typeof import("../components/ui/toast/index")['ToastProvider']
export const LazyToastTitle: typeof import("../components/ui/toast/index")['ToastTitle']
export const LazyToastViewport: typeof import("../components/ui/toast/index")['ToastViewport']
export const LazyIcon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
