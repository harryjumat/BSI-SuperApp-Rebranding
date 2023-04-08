Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

''----------DJA--------
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")
'
'Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor DJA - Positive")
'Call MPN("Pajak","820190902520489")
'Call SaveReact_Merge()

''----------DJP--------
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")
'
'Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor DJP - Positive")
'Call MPN("Pajak","127106941562033")
'Call SaveReact_Merge()

'----------DJBC--------
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")

Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor DJBC - Positive")
Call MPN("Pajak","620200700003737")
Call SaveReact_Merge()
