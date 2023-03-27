Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Profile - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Profile - Pajak/Cukai/SBN/Paspor")

Call react.Addtitle("BSI SuperApps - Profile - Pajak/Cukai/SBN/Paspor - Negative")
Call MPNNegative("Pajak")
Call SaveReact_Merge()	
