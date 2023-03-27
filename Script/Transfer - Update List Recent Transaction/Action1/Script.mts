Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - Update List Recent Transaction", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Update List Recent Transaction")

Call react.Addtitle("BSI SuperApps - Update List Recent Transaction - Positive")
Call UpdateListRecentTransaction("Positive")
Call SaveReact_Merge()	
