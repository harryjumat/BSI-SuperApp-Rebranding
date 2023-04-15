Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Homescreen -  Flow Favourite Dashboard", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Flow Favourite Dashboard")

Call react.Addtitle("BSI SuperApps - Flow Favourite Dashboard")
Call FlowFavouriteDashboard()
Call SaveReact_Merge()	
