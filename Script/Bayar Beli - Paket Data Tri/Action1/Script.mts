Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Paket Data Tri", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data Tri")

Call react.Addtitle("BSI SuperApps - Paket Data Tri - Positive")
Call PaketData("Tri")
Call SaveReact_Merge()	
