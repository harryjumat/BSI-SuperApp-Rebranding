Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Berbagi - Dompet Dhuafa", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Dompet Dhuafa")

Call react.Addtitle("BSI SuperApps - Dompet Dhuafa - Negative")
Call LembagaLainnyaNegative("dompetdhuafa")
Call SaveReact_Merge()	
