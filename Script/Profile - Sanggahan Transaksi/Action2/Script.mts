Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Profile - Pelaporan Melalui Mutasi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pelaporan Melalui Mutasi")

Call react.Addtitle("BSI SuperApps - Pelaporan Melalui Mutasi")
Call SanggahanTransaksi("Pelaporan Melalui Mutasi")
Call SaveReact_Merge()	
