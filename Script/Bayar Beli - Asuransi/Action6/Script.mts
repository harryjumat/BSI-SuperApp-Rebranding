Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Asuransi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Takaful")

Call react.Addtitle("BSI SuperApps - Takaful - Negative")
Call AsuransiClosePaymentNegative("takaful","102023902095")
Call SaveReact_Merge()	
