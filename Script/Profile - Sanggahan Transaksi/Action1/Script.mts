Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Pelaporan Transaksi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pelaporan Transaksi")

Call react.Addtitle("BSI SuperApps - Pelaporan Transaksi")
Call SanggahanTransaksi("Pelaporan Transaksi")
Call SaveReact_Merge()	
