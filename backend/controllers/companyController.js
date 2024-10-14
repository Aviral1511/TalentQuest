import {Company} from '../models/companySchema.js';

export const registerCompany = async (req, res) => {
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({message: "Company name is required", success:false});
        }
        const comp = await Company.findOne({name : companyName});
        if(comp){
            return res.status(400).json({message: "Cannot register same company again", success:false});
        }

        const company = await Company.create({
            name: companyName,
            userId : req.id
        });

        res.status(201).json({message:"Company registered successfully", company, success:true});
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Internal Server error",
            success : false
        });
    }
}

export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const comapnies = await Company.find({userId});
        if(!comapnies){
            return res.status(404).json({message: "No company found", success:false});
        }
        res.status(200).json({message:"Companies found successfully", comapnies, success:true});
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Internal Server error",
            success : false
        });
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({message: "No company found", success:false});
        }
        res.status(200).json({message:"Company found successfully", company, success:true});
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Internal Server error",
            success : false
        });
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {name, description, website, loction} = req.body;
        const file = req.file;
        //cloudinary

        const upateData = {name, description, website, loction};
        const company = await Company.findByIdAndUpdate(req.params.id, upateData, {new:true});

        if(!company){
            return res.status(404).json({message: "No company found", success:false});
        }

        res.status(200).json({message:"Company information updated successfully", company, success:true});
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Internal Server error",
            success : false
        });
    }
}