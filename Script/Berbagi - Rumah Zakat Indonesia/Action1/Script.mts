Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Berbagi - Rumah Zakat Indonesia", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Rumah Zakat Indonesia")

Call react.Addtitle("BSI SuperApps - Rumah Zakat Indonesia - Positive")
Call LembagaLainnya("rumahzakat")
Call SaveReact_Merge()	
