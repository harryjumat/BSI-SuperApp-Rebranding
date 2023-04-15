Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  BPJS Kesehatan", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Kesehatan")

Call react.Addtitle("BSI SuperApps - BPJS Kesehatan - Positive")
Call BPJSKesehatan("...") 'biller belum ada | belum get resi
Call SaveReact_Merge()	
