import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const bannerType = defineType({
  name: "banner",
  title: "Banners",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "group",
      title: "Group Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: "group",
      media: "images",
    },
    prepare({ title, media }) {
      return {
        title: title || "No Group Title",
        media: media[0] || ImagesIcon,
      };
    },
  },
});
