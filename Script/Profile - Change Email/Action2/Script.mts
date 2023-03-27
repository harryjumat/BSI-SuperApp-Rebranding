Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Change Email", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Change Email")

Call react.Addtitle("BSI SuperApps - Change Email - Negative")
Call ChangeEmail("Negative")
Call SaveReact_Merge()	
