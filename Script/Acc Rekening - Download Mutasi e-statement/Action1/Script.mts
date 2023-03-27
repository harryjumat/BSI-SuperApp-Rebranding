Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Acc Rekening - Download Mutas E-Statement", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Download Mutas E-Statement")

Call DownloadEStatement()
Call SaveReact_Merge()	
