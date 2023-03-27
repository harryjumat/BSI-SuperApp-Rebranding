Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

'----------DJA--------
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")

Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor - Positive")
Call MPN("Pajak","biller")
Call SaveReact_Merge()

'----------DJP--------
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")

Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor - Positive")
Call MPN("Pajak","biller")
Call SaveReact_Merge()

'----------DJBC--------
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")

Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor - Positive")
Call MPN("Pajak","biller")
Call SaveReact_Merge()
