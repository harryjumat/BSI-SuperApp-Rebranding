Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

''Change Profile Pic
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Profile - Change Profile Pic", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Change Profile Pic")
'
'Call react.Addtitle("BSI SuperApps - Change Profile Pic ")
'Call ChangeProfilePic()
'Call SaveReact_Merge()	

'Delete Profile Pic
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Delete Profile Pic", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Delete Profile Pic")

Call react.Addtitle("BSI SuperApps - Delete Profile Pic ")
Call DeleteProfilePic()
Call SaveReact_Merge()
