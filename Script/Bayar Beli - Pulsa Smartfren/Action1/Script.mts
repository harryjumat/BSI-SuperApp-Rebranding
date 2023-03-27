Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Pulsa Smartfren", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Smartfren")

Call react.Addtitle("BSI SuperApps - Pulsa Smartfren - Positive")
Call Pulsa("Smartfren")
Call SaveReact_Merge()	
