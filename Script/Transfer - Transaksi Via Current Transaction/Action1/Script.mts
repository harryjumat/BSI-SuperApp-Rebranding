Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Transfer - Transaksi Via Current Transaction", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Transaksi Via Current Transaction")

Call react.Addtitle("BSI SuperApps - Transaksi Via Current Transaction")
Call TransaksiViaCurrentTransaction()
Call SaveReact_Merge()	
