Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Berbagi - Jadiberkah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Jadiberkah")

Call react.Addtitle("BSI SuperApps - Jadiberkah - Negative")
Call LembagaLainnyaNegative("jadiberkah")
Call SaveReact_Merge()	
