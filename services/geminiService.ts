
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah Asisten Digital resmi Dinas Pemberdayaan Masyarakat dan Desa (DPMD) Provinsi Sulawesi Tenggara. 
        Tugas Anda adalah memberikan informasi yang akurat, sopan, dan membantu masyarakat mengenai program desa, Dana Desa, BUMDes, 
        dan layanan administrasi desa di wilayah Sulawesi Tenggara. Jika ditanya tentang Sulawesi Tenggara, berikan konteks lokal yang relevan.
        Gunakan Bahasa Indonesia yang formal namun ramah.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, sistem asisten kami sedang mengalami gangguan. Silakan coba lagi nanti.";
  }
};

export const searchVillageInfo = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Berikan informasi terkini mengenai: ${query} khusus dalam konteks pembangunan desa di Sulawesi Tenggara.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return {
      text: response.text,
      links: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || []
    };
  } catch (error) {
    console.error("Search Grounding Error:", error);
    return { text: "Gagal memproses pencarian terintegrasi.", links: [] };
  }
};
