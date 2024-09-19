'use client'

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FileText } from "lucide-react";


import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Nav } from "@/components/nav"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { AuroraBackground } from "@/components/ui/aurora-background"


export default function NewPage() {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    excel: z
    //Rest of validations done via react dropzone
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload an excel"),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      excel: new File([""], "filename"),

    },
  })


  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("excel", acceptedFiles[0]);
        form.clearErrors("excel");
      } catch (error) {
        console.error(error)
        form.resetField("excel");
      }
    },
    [form],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });


  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <Card className='min-w-[400px] flex flex-col'>
          <CardHeader>
          </CardHeader>
          <CardContent>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>活动主题</FormLabel>
                      <FormControl>
                        <Input placeholder="2024年教师评优" {...field} className='w-full h-16 leading-16 text-2lg font-bold'/>
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <FormField
                control={form.control}
                name="excel"
                render={() => (
                  <FormItem>
                    <FormLabel
                      className={`${
                        fileRejections.length !== 0 && "text-destructive"
                      }`}
                    >
                      教师名单
                    </FormLabel>
                    <FormControl>
                      <div
                        {...getRootProps()}
                        className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border  p-4 shadow-sm shadow-foreground"
                      >
                        <FileText
                          className={`size-10`}
                        />
                        <Input {...getInputProps()} type="file" />
                        {isDragActive ? (
                          <p>拖动到这里！</p>
                        ) : (
                          <p>点击这里或者直接将 excel文件拖拽到此</p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage>
                      {fileRejections.length !== 0 && (
                        <p>
                          Image must be less than 1MB and of type png, jpg, or jpeg
                        </p>
                      )}
                    </FormMessage>
                  </FormItem>
              )}
            />


          <Separator />

          <div className='flex flex-row justify-between items-center'>
            <Link href="#" className='underline'>模板下载</Link>
            <Button type="submit">创建活动</Button>
          </div>
        </form>
      </Form>

    </CardContent>
    <CardFooter className='text-sm text-center flex justify-center'>
      <p>
        @2024 北京市海淀教委
      </p>
    </CardFooter>
  </Card>

</motion.div>

<Nav />
    </AuroraBackground>

  )
}
