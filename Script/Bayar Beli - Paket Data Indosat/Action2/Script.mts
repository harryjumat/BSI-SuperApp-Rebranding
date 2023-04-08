Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Paket Data Indosat", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data Indosat")

Call react.Addtitle("BSI SuperApps - Paket Data Indosat - Negative")
Call PaketDataNegative("Indosat")
Call SaveReact_Merge()	
