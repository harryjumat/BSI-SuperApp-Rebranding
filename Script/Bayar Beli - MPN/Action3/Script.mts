Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Reinquiry", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Reinquiry")

Call react.Addtitle("BSI SuperApps - Reinquiry - Positive")
Call MPN("Reinquiry","123456789")
Call SaveReact_Merge()
