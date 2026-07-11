"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowLeft } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("form submit data:", userData);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-auto bg-background transition-colors duration-200">
      <Card className="border border-divider shadow-xl mx-auto w-full max-w-md p-6 md:p-8 rounded-2xl bg-card">
        <div className="text-center mb-3">
          <h1 className="text-xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-neutral-900 to-green-600 bg-clip-text text-transparent">
            Create an Account
          </h1>
          <p className="text-sm font-bold text-default-800 mt-2">
            Join us to book tickets seamlessly
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-xs font-semibold text-default-600">
              Name
            </Label>
            <Input
              placeholder="Enter your full name"
              className="mt-1"
              variant="bordered"
              radius="md"
            />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-default-600">
              Email
            </Label>
            <Input
              placeholder="Enter your email address"
              className="mt-1"
              variant="bordered"
              radius="md"
            />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Must contain at least one number";
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-default-600">
              Password
            </Label>
            <Input
              placeholder="Create a strong password"
              className="mt-1"
              variant="bordered"
              radius="md"
            />
            <Description className="text-[10px] text-default-400 mt-1 leading-normal">
              Must be at least 8 characters with 1 uppercase and 1 number.
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <div className="flex gap-3 mt-4 w-full">
            <Button
              type="submit"
              className="flex-1 font-semibold bg-linear-to-r from-neutral-900 to-green-600 text-white shadow-md hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              radius="md"
            >
              <Check className="w-4 h-4" />
              Sign Up
            </Button>
            <Button
              type="reset"
              variant="flat"
              className="font-medium text-default-600 hover:bg-default-200"
              radius="md"
            >
              Reset
            </Button>
          </div>
        </Form>

        <div className="mt-6 text-center border-t border-divider pt-4">
          <p className="text-xs text-default-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-primary font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-default-400 hover:text-foreground mt-4 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
}
