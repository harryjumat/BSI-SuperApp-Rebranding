Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Cardless Withdrawal - Tarik Tunai Gerai Indomaret", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Tarik Tunai Gerai Indomaret")

Call react.Addtitle("BSI SuperApps - Tarik Tunai Gerai Indomaret")
Call Gerai("indomaret")
Call SaveReact_Merge()	
