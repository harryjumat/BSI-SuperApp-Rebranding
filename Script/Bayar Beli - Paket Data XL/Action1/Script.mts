Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Paket Data XL", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data XL")

Call react.Addtitle("BSI SuperApps - Paket Data XL - Positive")
Call PaketData("XL")
Call SaveReact_Merge()	
