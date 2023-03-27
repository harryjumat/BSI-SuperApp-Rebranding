Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Pulsa XL", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa XL")

Call react.Addtitle("BSI SuperApps - Pulsa XL - Positive")
Call Pulsa("XL")
Call SaveReact_Merge()	
