// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ElAffix: typeof import('../packages/fast-plus')['ElAffix']
    ElAlert: typeof import('../packages/fast-plus')['ElAlert']
    ElAside: typeof import('../packages/fast-plus')['ElAside']
    ElAutocomplete: typeof import('../packages/fast-plus')['ElAutocomplete']
    ElAvatar: typeof import('../packages/fast-plus')['ElAvatar']
    ElBacktop: typeof import('../packages/fast-plus')['ElBacktop']
    ElBadge: typeof import('../packages/fast-plus')['ElBadge']
    ElBreadcrumb: typeof import('../packages/fast-plus')['ElBreadcrumb']
    ElBreadcrumbItem: typeof import('../packages/fast-plus')['ElBreadcrumbItem']
    ElButton: typeof import('../packages/fast-plus')['ElButton']
    ElButtonGroup: typeof import('../packages/fast-plus')['ElButtonGroup']
    ElCalendar: typeof import('../packages/fast-plus')['ElCalendar']
    ElCard: typeof import('../packages/fast-plus')['ElCard']
    ElCarousel: typeof import('../packages/fast-plus')['ElCarousel']
    ElCarouselItem: typeof import('../packages/fast-plus')['ElCarouselItem']
    ElCascader: typeof import('../packages/fast-plus')['ElCascader']
    ElCascaderPanel: typeof import('../packages/fast-plus')['ElCascaderPanel']
    ElCheckbox: typeof import('../packages/fast-plus')['ElCheckbox']
    ElCheckboxButton: typeof import('../packages/fast-plus')['ElCheckboxButton']
    ElCheckboxGroup: typeof import('../packages/fast-plus')['ElCheckboxGroup']
    ElCol: typeof import('../packages/fast-plus')['ElCol']
    ElCollapse: typeof import('../packages/fast-plus')['ElCollapse']
    ElCollapseItem: typeof import('../packages/fast-plus')['ElCollapseItem']
    ElCollapseTransition: typeof import('../packages/fast-plus')['ElCollapseTransition']
    ElColorPicker: typeof import('../packages/fast-plus')['ElColorPicker']
    ElContainer: typeof import('../packages/fast-plus')['ElContainer']
    ElConfigProvider: typeof import('../packages/fast-plus')['ElConfigProvider']
    ElDatePicker: typeof import('../packages/fast-plus')['ElDatePicker']
    ElDialog: typeof import('../packages/fast-plus')['ElDialog']
    ElDivider: typeof import('../packages/fast-plus')['ElDivider']
    ElDrawer: typeof import('../packages/fast-plus')['ElDrawer']
    ElDropdown: typeof import('../packages/fast-plus')['ElDropdown']
    ElDropdownItem: typeof import('../packages/fast-plus')['ElDropdownItem']
    ElDropdownMenu: typeof import('../packages/fast-plus')['ElDropdownMenu']
    ElEmpty: typeof import('../packages/fast-plus')['ElEmpty']
    ElFooter: typeof import('../packages/fast-plus')['ElFooter']
    ElForm: typeof import('../packages/fast-plus')['ElForm']
    ElFormItem: typeof import('../packages/fast-plus')['ElFormItem']
    ElHeader: typeof import('../packages/fast-plus')['ElHeader']
    ElIcon: typeof import('../packages/fast-plus')['ElIcon']
    ElImage: typeof import('../packages/fast-plus')['ElImage']
    ElImageViewer: typeof import('../packages/fast-plus')['ElImageViewer']
    ElInput: typeof import('../packages/fast-plus')['ElInput']
    ElInputNumber: typeof import('../packages/fast-plus')['ElInputNumber']
    ElLink: typeof import('../packages/fast-plus')['ElLink']
    ElMain: typeof import('../packages/fast-plus')['ElMain']
    ElMenu: typeof import('../packages/fast-plus')['ElMenu']
    ElMenuItem: typeof import('../packages/fast-plus')['ElMenuItem']
    ElMenuItemGroup: typeof import('../packages/fast-plus')['ElMenuItemGroup']
    ElOption: typeof import('../packages/fast-plus')['ElOption']
    ElOptionGroup: typeof import('../packages/fast-plus')['ElOptionGroup']
    ElPageHeader: typeof import('../packages/fast-plus')['ElPageHeader']
    ElPagination: typeof import('../packages/fast-plus')['ElPagination']
    ElPopconfirm: typeof import('../packages/fast-plus')['ElPopconfirm']
    ElPopper: typeof import('../packages/fast-plus')['ElPopper']
    ElProgress: typeof import('../packages/fast-plus')['ElProgress']
    ElRadio: typeof import('../packages/fast-plus')['ElRadio']
    ElRadioButton: typeof import('../packages/fast-plus')['ElRadioButton']
    ElRadioGroup: typeof import('../packages/fast-plus')['ElRadioGroup']
    ElRate: typeof import('../packages/fast-plus')['ElRate']
    ElRow: typeof import('../packages/fast-plus')['ElRow']
    ElScrollbar: typeof import('../packages/fast-plus')['ElScrollbar']
    ElSelect: typeof import('../packages/fast-plus')['ElSelect']
    ElSlider: typeof import('../packages/fast-plus')['ElSlider']
    ElStep: typeof import('../packages/fast-plus')['ElStep']
    ElSteps: typeof import('../packages/fast-plus')['ElSteps']
    ElSubMenu: typeof import('../packages/fast-plus')['ElSubMenu']
    ElSwitch: typeof import('../packages/fast-plus')['ElSwitch']
    ElTabPane: typeof import('../packages/fast-plus')['ElTabPane']
    ElTable: typeof import('../packages/fast-plus')['ElTable']
    ElTableColumn: typeof import('../packages/fast-plus')['ElTableColumn']
    ElTabs: typeof import('../packages/fast-plus')['ElTabs']
    ElTag: typeof import('../packages/fast-plus')['ElTag']
    ElText: typeof import('../packages/fast-plus')['ElText']
    ElTimePicker: typeof import('../packages/fast-plus')['ElTimePicker']
    ElTimeSelect: typeof import('../packages/fast-plus')['ElTimeSelect']
    ElTimeline: typeof import('../packages/fast-plus')['ElTimeline']
    ElTimelineItem: typeof import('../packages/fast-plus')['ElTimelineItem']
    ElTooltip: typeof import('../packages/fast-plus')['ElTooltip']
    ElTransfer: typeof import('../packages/fast-plus')['ElTransfer']
    ElTree: typeof import('../packages/fast-plus')['ElTree']
    ElTreeSelect: typeof import('../packages/fast-plus')['ElTreeSelect']
    ElTreeV2: typeof import('../packages/fast-plus')['ElTreeV2']
    ElUpload: typeof import('../packages/fast-plus')['ElUpload']
    ElSpace: typeof import('../packages/fast-plus')['ElSpace']
    ElSkeleton: typeof import('../packages/fast-plus')['ElSkeleton']
    ElSkeletonItem: typeof import('../packages/fast-plus')['ElSkeletonItem']
    ElStatistic: typeof import('../packages/fast-plus')['ElStatistic']
    ElCheckTag: typeof import('../packages/fast-plus')['ElCheckTag']
    ElDescriptions: typeof import('../packages/fast-plus')['ElDescriptions']
    ElDescriptionsItem: typeof import('../packages/fast-plus')['ElDescriptionsItem']
    ElResult: typeof import('../packages/fast-plus')['ElResult']
    ElSelectV2: typeof import('../packages/fast-plus')['ElSelectV2']
  }

  interface ComponentCustomProperties {
    $message: typeof import('../packages/fast-plus')['ElMessage']
    $notify: typeof import('../packages/fast-plus')['ElNotification']
    $msgbox: typeof import('../packages/fast-plus')['ElMessageBox']
    $messageBox: typeof import('../packages/fast-plus')['ElMessageBox']
    $alert: typeof import('../packages/fast-plus')['ElMessageBox']['alert']
    $confirm: typeof import('../packages/fast-plus')['ElMessageBox']['confirm']
    $prompt: typeof import('../packages/fast-plus')['ElMessageBox']['prompt']
    $loading: typeof import('../packages/fast-plus')['ElLoadingService']
  }
}

export {}
