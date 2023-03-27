Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli - Pulsa Indosat", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Indosat")

Call react.Addtitle("BSI SuperApps - Pulsa Indosat - Negative")
Call PulsaNegative("Indosat")
Call SaveReact_Merge()
