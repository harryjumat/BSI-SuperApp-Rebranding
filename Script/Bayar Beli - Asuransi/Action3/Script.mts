Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Asuransi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps CAR Tagihan Lainnya")

Call react.Addtitle("BSI SuperApps - CAR Tagihan Lainnya - Positive")
Call AsuransiClosePayment("takaful","102023902095")
Call SaveReact_Merge()	
