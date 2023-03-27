Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Pulsa Telkomsel", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Telkomsel")

Call react.Addtitle("BSI SuperApps - Pulsa Telkomsel - Negative")
Call PulsaNegative("Telkomsel")
Call SaveReact_Merge()
