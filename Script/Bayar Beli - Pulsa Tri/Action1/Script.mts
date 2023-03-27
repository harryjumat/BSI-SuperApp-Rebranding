Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Pulsa Tri", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Tri")

Call react.Addtitle("BSI SuperApps - Pulsa Tri - Positive")
Call Pulsa("Tri")
Call SaveReact_Merge()	
