Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Paket Data Telkomsel", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data Telkomsel")

Call react.Addtitle("BSI SuperApps - Paket Data Telkomsel - Positive")
Call PaketData("Telkomsel")
Call SaveReact_Merge()	
