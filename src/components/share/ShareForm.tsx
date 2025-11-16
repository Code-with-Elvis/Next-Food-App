"use client";

import { useForm } from "react-hook-form";
import { nan, z } from "zod";
import { nanoid } from "nanoid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";
import { Button } from "../ui/button";
import { IconCheck, IconCopy } from "@tabler/icons-react";

const shareFormSchema = z.object({
  name: z
    .string()
    .min(1, "Meal name is required")
    .min(2, "Meal name must be at least 2 characters")
    .max(100, "Meal name must be less than 100 characters"),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description must be at most 1000 characters"),
  imageUrl: z.url("Please enter a valid URL"),
  recipeUrl: z.url("Please enter a valid URL").optional().or(z.literal("")),
  calories: z.string().refine(
    (val) => {
      if (!val || val === "") return true;
      const num = parseInt(val);
      return !isNaN(num) && num >= 0 && num <= 10000;
    },
    {
      message: "Calories must be a valid number between 0 and 10,000",
    }
  ),
  createdBy: z
    .string()
    .trim()
    .regex(
      /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/,
      "Full name must contain exactly two names"
    ),
});

const ShareForm = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState("");
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shareFormSchema),
  });

  const onSubmit = (data: z.infer<typeof shareFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="mt-8">
      <p className="max-w-xl mx-auto mb-2 text-sm">
        Generate a unique ID and save it so you can edit or delete your meal
        later.
      </p>
      <article className="max-w-xl mx-auto flex gap-2 flex-col sm:flex-row items-center ">
        <InputGroup>
          <InputGroupInput
            placeholder="wXoUqy9IoMQXcJuVYjAf0"
            value={userId}
            readOnly
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={() => {
                clipboard.copy(userId);
              }}
            >
              {clipboard.copied ? <IconCheck /> : <IconCopy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={() => setUserId(nanoid())}>Generate Your ID</Button>
      </article>
      <form
        className="mt-4 py-8 px-6 max-w-xl mx-auto border rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <Label htmlFor="name" className="text-sm ml-1 mb-1">
            Meal Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="e.g Spaghetti Bolognese"
            {...register("name")}
            className={` py-5 ${
              errors.name ? "border-red-400" : "border-neutral-300"
            }`}
          />
          {errors.name && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              * {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <Label htmlFor="imageUrl" className="text-sm ml-1 mb-1">
            Image URL
          </Label>
          <Input
            type="text"
            id="imageUrl"
            placeholder="e.g https://example.com/image.jpg"
            {...register("imageUrl")}
            className={` py-5 ${
              errors.imageUrl ? "border-red-400" : "border-neutral-300"
            }`}
          />
          {errors.imageUrl && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              * {errors.imageUrl.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <Label htmlFor="calories" className="text-sm ml-1 mb-1">
            Calories
          </Label>
          <Input
            type="text"
            id="calories"
            placeholder="e.g 500"
            {...register("calories")}
            className={` py-5 ${
              errors.calories ? "border-red-400" : "border-neutral-300"
            }`}
          />
          {errors.calories && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              * {errors.calories.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <Label htmlFor="recipeUrl" className="text-sm ml-1 mb-1">
            Recipe URL (Optional)
          </Label>
          <Input
            type="text"
            id="recipeUrl"
            placeholder="e.g https://example.com/recipe"
            {...register("recipeUrl")}
            className={` py-5 ${
              errors.recipeUrl ? "border-red-400" : "border-neutral-300"
            }`}
          />
          {errors.recipeUrl && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              * {errors.recipeUrl.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <Label htmlFor="createdBy" className="text-sm ml-1 mb-1">
            Created By
          </Label>
          <Input
            type="text"
            id="createdBy"
            placeholder="e.g John Doe"
            {...register("createdBy")}
            className={` py-5 ${
              errors.createdBy ? "border-red-400" : "border-neutral-300"
            }`}
          />
          {errors.createdBy && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              * {errors.createdBy.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <Label htmlFor="description" className="text-sm ml-1 mb-1">
            Description
          </Label>
          <InputGroup
            className={` ${
              errors.description ? "border-red-400" : "border-neutral-300"
            }`}
          >
            <InputGroupTextarea
              id="description"
              {...register("description")}
              onChange={(e) => setCount(e.target.value.trim().length)}
              rows={4}
              className="resize-none py-5"
              placeholder="Enter property description"
            />
            <InputGroupAddon align="block-end">
              <InputGroupText className="font-medium text-xs text-neutral-200">
                {1000 - count} characters left
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          {errors.description && (
            <p className="text-xs font-medium ml-1 mt-1 text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <Button type="submit" className="w-40">
            Share Meal
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ShareForm;
