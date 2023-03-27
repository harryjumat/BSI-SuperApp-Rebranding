Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Berbagi - Kitabisa", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Kitabisa")

Call react.Addtitle("BSI SuperApps - Kitabisa - Negative")
Call LembagaLainnyaNegative("kitabisa")
Call SaveReact_Merge()	
