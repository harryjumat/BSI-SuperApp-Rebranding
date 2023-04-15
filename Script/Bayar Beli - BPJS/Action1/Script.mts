Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  BPJS Ketenagakerjaan BPU", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Ketenagakerjaan BPU")

Call react.Addtitle("BSI SuperApps - BPJS Ketenagakerjaan BPU - Positive")
Call BPJSKetenagakerjaanBPU("3671081211770004")
Call SaveReact_Merge()	
