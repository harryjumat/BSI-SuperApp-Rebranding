Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Social Media", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Social Media")

Call react.Addtitle("BSI SuperApps - Social Media")
Call SocialMedia()
Call SaveReact_Merge()	
