Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  BPJS Ketenagakerjaan PU", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Ketenagakerjaan PU")

Call react.Addtitle("BSI SuperApps - BPJS Ketenagakerjaan PU - Positive")
Call BPJSKetenagakerjaanPU("...") 'belum ada biller | belum get resi
Call SaveReact_Merge()	
