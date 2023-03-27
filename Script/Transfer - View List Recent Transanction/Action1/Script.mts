Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - View List Recent Transaction", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps View List Recent Transaction")

Call react.Addtitle("BSI SuperApps - View List Recent Transaction - Positive")
Call ViewListRecentTransaction("Positive")
Call SaveReact_Merge()	
