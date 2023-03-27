Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - Update List Recent Transcation Bayar Beli", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Update List Recent Transcation Bayar Beli")

Call react.Addtitle("BSI SuperApps - Update List Recent Transcation Bayar Beli - Positive")
Call UpdateListRecentTransactionBayarBeli()
Call SaveReact_Merge()	
