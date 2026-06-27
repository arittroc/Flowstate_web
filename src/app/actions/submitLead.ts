"use server";

import { supabaseAdmin } from "@/lib/supabase";

export async function submitLead(formData: {
  industry: string;
  bottleneck: string;
  name: string;
  email: string;
  phone: string;
}) {
  try {
    // Basic validation
    if (!formData.name || !formData.email || !formData.industry || !formData.bottleneck) {
      return { success: false, error: "Missing required fields." };
    }

    const { error } = await supabaseAdmin
      .from("leads")
      .insert([
        {
          industry: formData.industry,
          bottleneck: formData.bottleneck,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Database error occurred." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, error: "Internal server error." };
  }
}
