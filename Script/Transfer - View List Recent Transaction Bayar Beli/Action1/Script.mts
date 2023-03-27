Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

'Positive
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - View List Recent Transaction Bayar Beli", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps View List Recent Transaction Bayar Beli")

Call ViewListRecentTransactionBayarBeli("Positive")
Call SaveReact_Merge()	

'Negative
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - View List Recent Transaction Bayar Beli", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps View List Recent Transaction Bayar Beli")

Call ViewListRecentTransactionBayarBeli("Negative")
Call SaveReact_Merge()	
